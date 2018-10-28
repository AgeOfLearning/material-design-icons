import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCheckCircleElement
 * @class IconSharpCheckCircleElement
 * @extends {AoflElement}
 */
class IconSharpCheckCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCheckCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-check-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCheckCircleElement.is, IconSharpCheckCircleElement);

export default IconSharpCheckCircleElement;
