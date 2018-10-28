import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHelpOutlineElement
 * @class IconRoundHelpOutlineElement
 * @extends {AoflElement}
 */
class IconRoundHelpOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHelpOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-help-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHelpOutlineElement.is, IconRoundHelpOutlineElement);

export default IconRoundHelpOutlineElement;
