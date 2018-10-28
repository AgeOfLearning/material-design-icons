import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDepartureBoardElement
 * @class IconTwotoneDepartureBoardElement
 * @extends {AoflElement}
 */
class IconTwotoneDepartureBoardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDepartureBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-departure-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDepartureBoardElement.is, IconTwotoneDepartureBoardElement);

export default IconTwotoneDepartureBoardElement;
