import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDiscFullElement
 * @class IconSharpDiscFullElement
 * @extends {AoflElement}
 */
class IconSharpDiscFullElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDiscFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-disc-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDiscFullElement.is, IconSharpDiscFullElement);

export default IconSharpDiscFullElement;
