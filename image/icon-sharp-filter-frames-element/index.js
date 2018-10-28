import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterFramesElement
 * @class IconSharpFilterFramesElement
 * @extends {AoflElement}
 */
class IconSharpFilterFramesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterFramesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-frames';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterFramesElement.is, IconSharpFilterFramesElement);

export default IconSharpFilterFramesElement;
