import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBuildElement
 * @class IconRoundBuildElement
 * @extends {AoflElement}
 */
class IconRoundBuildElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBuildElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-build';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBuildElement.is, IconRoundBuildElement);

export default IconRoundBuildElement;
