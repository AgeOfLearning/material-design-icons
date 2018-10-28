import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPageviewElement
 * @class IconSharpPageviewElement
 * @extends {AoflElement}
 */
class IconSharpPageviewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPageviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pageview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPageviewElement.is, IconSharpPageviewElement);

export default IconSharpPageviewElement;
