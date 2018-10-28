import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCodeElement
 * @class IconRoundCodeElement
 * @extends {AoflElement}
 */
class IconRoundCodeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCodeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-code';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCodeElement.is, IconRoundCodeElement);

export default IconRoundCodeElement;
