import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRvHookupElement
 * @class IconSharpRvHookupElement
 * @extends {AoflElement}
 */
class IconSharpRvHookupElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRvHookupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rv-hookup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRvHookupElement.is, IconSharpRvHookupElement);

export default IconSharpRvHookupElement;
