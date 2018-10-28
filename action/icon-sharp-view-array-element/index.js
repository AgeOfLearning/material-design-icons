import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewArrayElement
 * @class IconSharpViewArrayElement
 * @extends {AoflElement}
 */
class IconSharpViewArrayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewArrayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-array';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewArrayElement.is, IconSharpViewArrayElement);

export default IconSharpViewArrayElement;
