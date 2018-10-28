import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUnfoldLessElement
 * @class IconSharpUnfoldLessElement
 * @extends {AoflElement}
 */
class IconSharpUnfoldLessElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUnfoldLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-unfold-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUnfoldLessElement.is, IconSharpUnfoldLessElement);

export default IconSharpUnfoldLessElement;
