import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCancelPresentationElement
 * @class IconSharpCancelPresentationElement
 * @extends {AoflElement}
 */
class IconSharpCancelPresentationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCancelPresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cancel-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCancelPresentationElement.is, IconSharpCancelPresentationElement);

export default IconSharpCancelPresentationElement;
