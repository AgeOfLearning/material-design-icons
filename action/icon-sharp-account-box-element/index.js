import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccountBoxElement
 * @class IconSharpAccountBoxElement
 * @extends {AoflElement}
 */
class IconSharpAccountBoxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccountBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-account-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccountBoxElement.is, IconSharpAccountBoxElement);

export default IconSharpAccountBoxElement;
