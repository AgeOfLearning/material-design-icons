import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGradeElement
 * @class IconSharpGradeElement
 * @extends {AoflElement}
 */
class IconSharpGradeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGradeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-grade';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGradeElement.is, IconSharpGradeElement);

export default IconSharpGradeElement;
