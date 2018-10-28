import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRepeatOneElement
 * @class IconSharpRepeatOneElement
 * @extends {AoflElement}
 */
class IconSharpRepeatOneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRepeatOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-repeat-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRepeatOneElement.is, IconSharpRepeatOneElement);

export default IconSharpRepeatOneElement;
