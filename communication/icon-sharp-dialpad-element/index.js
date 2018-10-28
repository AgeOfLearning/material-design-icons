import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDialpadElement
 * @class IconSharpDialpadElement
 * @extends {AoflElement}
 */
class IconSharpDialpadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDialpadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dialpad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDialpadElement.is, IconSharpDialpadElement);

export default IconSharpDialpadElement;
