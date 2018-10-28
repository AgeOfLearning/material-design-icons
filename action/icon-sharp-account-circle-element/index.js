import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccountCircleElement
 * @class IconSharpAccountCircleElement
 * @extends {AoflElement}
 */
class IconSharpAccountCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccountCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-account-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccountCircleElement.is, IconSharpAccountCircleElement);

export default IconSharpAccountCircleElement;
