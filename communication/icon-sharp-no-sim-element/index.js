import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNoSimElement
 * @class IconSharpNoSimElement
 * @extends {AoflElement}
 */
class IconSharpNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNoSimElement.is, IconSharpNoSimElement);

export default IconSharpNoSimElement;
