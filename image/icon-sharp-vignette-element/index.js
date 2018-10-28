import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVignetteElement
 * @class IconSharpVignetteElement
 * @extends {AoflElement}
 */
class IconSharpVignetteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVignetteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vignette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVignetteElement.is, IconSharpVignetteElement);

export default IconSharpVignetteElement;
