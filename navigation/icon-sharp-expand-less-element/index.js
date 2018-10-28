import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExpandLessElement
 * @class IconSharpExpandLessElement
 * @extends {AoflElement}
 */
class IconSharpExpandLessElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExpandLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-expand-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExpandLessElement.is, IconSharpExpandLessElement);

export default IconSharpExpandLessElement;
