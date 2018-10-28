import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEditLocationElement
 * @class IconSharpEditLocationElement
 * @extends {AoflElement}
 */
class IconSharpEditLocationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEditLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-edit-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEditLocationElement.is, IconSharpEditLocationElement);

export default IconSharpEditLocationElement;
