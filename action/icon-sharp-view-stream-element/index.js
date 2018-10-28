import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewStreamElement
 * @class IconSharpViewStreamElement
 * @extends {AoflElement}
 */
class IconSharpViewStreamElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewStreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-stream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewStreamElement.is, IconSharpViewStreamElement);

export default IconSharpViewStreamElement;
