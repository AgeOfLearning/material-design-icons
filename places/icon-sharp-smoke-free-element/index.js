import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSmokeFreeElement
 * @class IconSharpSmokeFreeElement
 * @extends {AoflElement}
 */
class IconSharpSmokeFreeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSmokeFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-smoke-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSmokeFreeElement.is, IconSharpSmokeFreeElement);

export default IconSharpSmokeFreeElement;
