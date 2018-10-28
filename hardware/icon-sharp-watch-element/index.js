import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWatchElement
 * @class IconSharpWatchElement
 * @extends {AoflElement}
 */
class IconSharpWatchElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWatchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-watch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWatchElement.is, IconSharpWatchElement);

export default IconSharpWatchElement;
