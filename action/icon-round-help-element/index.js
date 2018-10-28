import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHelpElement
 * @class IconRoundHelpElement
 * @extends {AoflElement}
 */
class IconRoundHelpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHelpElement.is, IconRoundHelpElement);

export default IconRoundHelpElement;
