import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowDropDownCircleElement
 * @class IconRoundArrowDropDownCircleElement
 * @extends {AoflElement}
 */
class IconRoundArrowDropDownCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowDropDownCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-drop-down-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowDropDownCircleElement.is, IconRoundArrowDropDownCircleElement);

export default IconRoundArrowDropDownCircleElement;
