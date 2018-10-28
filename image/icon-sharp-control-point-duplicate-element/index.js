import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpControlPointDuplicateElement
 * @class IconSharpControlPointDuplicateElement
 * @extends {AoflElement}
 */
class IconSharpControlPointDuplicateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpControlPointDuplicateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-control-point-duplicate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpControlPointDuplicateElement.is, IconSharpControlPointDuplicateElement);

export default IconSharpControlPointDuplicateElement;
