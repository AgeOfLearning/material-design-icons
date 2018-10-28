import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDvrElement
 * @class IconSharpDvrElement
 * @extends {AoflElement}
 */
class IconSharpDvrElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDvrElement.is, IconSharpDvrElement);

export default IconSharpDvrElement;
