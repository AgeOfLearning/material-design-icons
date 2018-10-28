import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWorkElement
 * @class IconSharpWorkElement
 * @extends {AoflElement}
 */
class IconSharpWorkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWorkElement.is, IconSharpWorkElement);

export default IconSharpWorkElement;
