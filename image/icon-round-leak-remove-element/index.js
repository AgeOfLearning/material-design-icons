import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLeakRemoveElement
 * @class IconRoundLeakRemoveElement
 * @extends {AoflElement}
 */
class IconRoundLeakRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLeakRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-leak-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLeakRemoveElement.is, IconRoundLeakRemoveElement);

export default IconRoundLeakRemoveElement;
