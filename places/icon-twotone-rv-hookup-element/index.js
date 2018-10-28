import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRvHookupElement
 * @class IconTwotoneRvHookupElement
 * @extends {AoflElement}
 */
class IconTwotoneRvHookupElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRvHookupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rv-hookup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRvHookupElement.is, IconTwotoneRvHookupElement);

export default IconTwotoneRvHookupElement;
