import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDepartureBoardElement
 * @class IconBaselineDepartureBoardElement
 * @extends {AoflElement}
 */
class IconBaselineDepartureBoardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDepartureBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-departure-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDepartureBoardElement.is, IconBaselineDepartureBoardElement);

export default IconBaselineDepartureBoardElement;
