import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpClearElement
 * @class IconSharpClearElement
 * @extends {AoflElement}
 */
class IconSharpClearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpClearElement.is, IconSharpClearElement);

export default IconSharpClearElement;
