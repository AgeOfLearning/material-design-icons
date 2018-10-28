import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrainElement
 * @class IconSharpTrainElement
 * @extends {AoflElement}
 */
class IconSharpTrainElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-train';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrainElement.is, IconSharpTrainElement);

export default IconSharpTrainElement;
