import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWorkOffElement
 * @class IconSharpWorkOffElement
 * @extends {AoflElement}
 */
class IconSharpWorkOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWorkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-work-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWorkOffElement.is, IconSharpWorkOffElement);

export default IconSharpWorkOffElement;
