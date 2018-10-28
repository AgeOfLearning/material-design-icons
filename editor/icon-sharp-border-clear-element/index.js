import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderClearElement
 * @class IconSharpBorderClearElement
 * @extends {AoflElement}
 */
class IconSharpBorderClearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderClearElement.is, IconSharpBorderClearElement);

export default IconSharpBorderClearElement;
