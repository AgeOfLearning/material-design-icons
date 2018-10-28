import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplayElement
 * @class IconBaselineReplayElement
 * @extends {AoflElement}
 */
class IconBaselineReplayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-replay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplayElement.is, IconBaselineReplayElement);

export default IconBaselineReplayElement;
