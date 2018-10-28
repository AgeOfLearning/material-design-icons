import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDepartureBoardElement
 * @class IconOutlineDepartureBoardElement
 * @extends {AoflElement}
 */
class IconOutlineDepartureBoardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDepartureBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-departure-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDepartureBoardElement.is, IconOutlineDepartureBoardElement);

export default IconOutlineDepartureBoardElement;
