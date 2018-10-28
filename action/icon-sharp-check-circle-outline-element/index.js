import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCheckCircleOutlineElement
 * @class IconSharpCheckCircleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpCheckCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCheckCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-check-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCheckCircleOutlineElement.is, IconSharpCheckCircleOutlineElement);

export default IconSharpCheckCircleOutlineElement;
