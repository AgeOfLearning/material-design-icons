import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFullscreenExitElement
 * @class IconBaselineFullscreenExitElement
 * @extends {AoflElement}
 */
class IconBaselineFullscreenExitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFullscreenExitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fullscreen-exit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFullscreenExitElement.is, IconBaselineFullscreenExitElement);

export default IconBaselineFullscreenExitElement;
