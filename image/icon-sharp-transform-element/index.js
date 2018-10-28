import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTransformElement
 * @class IconSharpTransformElement
 * @extends {AoflElement}
 */
class IconSharpTransformElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTransformElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-transform';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTransformElement.is, IconSharpTransformElement);

export default IconSharpTransformElement;
