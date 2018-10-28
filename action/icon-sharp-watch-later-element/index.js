import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWatchLaterElement
 * @class IconSharpWatchLaterElement
 * @extends {AoflElement}
 */
class IconSharpWatchLaterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWatchLaterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-watch-later';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWatchLaterElement.is, IconSharpWatchLaterElement);

export default IconSharpWatchLaterElement;
