import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRvHookupElement
 * @class IconOutlineRvHookupElement
 * @extends {AoflElement}
 */
class IconOutlineRvHookupElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRvHookupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rv-hookup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRvHookupElement.is, IconOutlineRvHookupElement);

export default IconOutlineRvHookupElement;
