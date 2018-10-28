import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAllOutElement
 * @class IconSharpAllOutElement
 * @extends {AoflElement}
 */
class IconSharpAllOutElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAllOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-all-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAllOutElement.is, IconSharpAllOutElement);

export default IconSharpAllOutElement;
