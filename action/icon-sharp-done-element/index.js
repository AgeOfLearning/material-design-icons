import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDoneElement
 * @class IconSharpDoneElement
 * @extends {AoflElement}
 */
class IconSharpDoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDoneElement.is, IconSharpDoneElement);

export default IconSharpDoneElement;
