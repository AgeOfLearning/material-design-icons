import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCheckBoxOutlineBlankElement
 * @class IconRoundCheckBoxOutlineBlankElement
 * @extends {AoflElement}
 */
class IconRoundCheckBoxOutlineBlankElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCheckBoxOutlineBlankElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-check-box-outline-blank';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCheckBoxOutlineBlankElement.is, IconRoundCheckBoxOutlineBlankElement);

export default IconRoundCheckBoxOutlineBlankElement;
