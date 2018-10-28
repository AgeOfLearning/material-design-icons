import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPregnantWomanElement
 * @class IconSharpPregnantWomanElement
 * @extends {AoflElement}
 */
class IconSharpPregnantWomanElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPregnantWomanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pregnant-woman';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPregnantWomanElement.is, IconSharpPregnantWomanElement);

export default IconSharpPregnantWomanElement;
