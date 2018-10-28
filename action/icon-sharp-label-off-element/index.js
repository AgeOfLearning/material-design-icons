import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLabelOffElement
 * @class IconSharpLabelOffElement
 * @extends {AoflElement}
 */
class IconSharpLabelOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLabelOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-label-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLabelOffElement.is, IconSharpLabelOffElement);

export default IconSharpLabelOffElement;
