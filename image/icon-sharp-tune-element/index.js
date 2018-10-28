import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTuneElement
 * @class IconSharpTuneElement
 * @extends {AoflElement}
 */
class IconSharpTuneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTuneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tune';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTuneElement.is, IconSharpTuneElement);

export default IconSharpTuneElement;
