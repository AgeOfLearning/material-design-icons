import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLeakAddElement
 * @class IconRoundLeakAddElement
 * @extends {AoflElement}
 */
class IconRoundLeakAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLeakAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-leak-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLeakAddElement.is, IconRoundLeakAddElement);

export default IconRoundLeakAddElement;
