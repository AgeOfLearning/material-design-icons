import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrackChangesElement
 * @class IconBaselineTrackChangesElement
 * @extends {AoflElement}
 */
class IconBaselineTrackChangesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrackChangesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-track-changes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrackChangesElement.is, IconBaselineTrackChangesElement);

export default IconBaselineTrackChangesElement;
